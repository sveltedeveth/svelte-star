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
export type GiBladeFallProps = typeof __propDef.props;
export type GiBladeFallEvents = typeof __propDef.events;
export type GiBladeFallSlots = typeof __propDef.slots;
export default class GiBladeFall extends SvelteComponentTyped<GiBladeFallProps, GiBladeFallEvents, GiBladeFallSlots> {
}
export {};
