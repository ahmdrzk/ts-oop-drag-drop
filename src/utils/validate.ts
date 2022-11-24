interface ValidationConfig {
  value: string | number;
  required: boolean;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
}

export function validate(config: ValidationConfig): boolean {
  let isValid = true;

  if (typeof config.value === "string") {
    if (config.required && config.value.trim().length === 0) isValid = false;
    if (config.maxLength && config.value.trim().length > config.maxLength) isValid = false;
    if (config.minLength && config.value.trim().length < config.minLength) isValid = false;
  }

  if (typeof config.value === "number") {
    if (config.required && config.value === 0) isValid = false;
    if (config.max && config.value > config.max) isValid = false;
    if (config.min && config.value < config.min) isValid = false;
  }

  return isValid;
}
