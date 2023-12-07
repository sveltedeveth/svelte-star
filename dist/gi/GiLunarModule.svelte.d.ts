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
export type GiLunarModuleProps = typeof __propDef.props;
export type GiLunarModuleEvents = typeof __propDef.events;
export type GiLunarModuleSlots = typeof __propDef.slots;
export default class GiLunarModule extends SvelteComponentTyped<GiLunarModuleProps, GiLunarModuleEvents, GiLunarModuleSlots> {
}
export {};
