import type { Component } from 'vue';

export interface ComponentType {
    [key: string]: Component | string;
}