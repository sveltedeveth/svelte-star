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
export type GiHandcuffsProps = typeof __propDef.props;
export type GiHandcuffsEvents = typeof __propDef.events;
export type GiHandcuffsSlots = typeof __propDef.slots;
export default class GiHandcuffs extends SvelteComponentTyped<GiHandcuffsProps, GiHandcuffsEvents, GiHandcuffsSlots> {
}
export {};
