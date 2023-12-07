import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DiYeomanProps = typeof __propDef.props;
export type DiYeomanEvents = typeof __propDef.events;
export type DiYeomanSlots = typeof __propDef.slots;
export default class DiYeoman extends SvelteComponentTyped<DiYeomanProps, DiYeomanEvents, DiYeomanSlots> {
}
export {};
