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
export type GiPlugProps = typeof __propDef.props;
export type GiPlugEvents = typeof __propDef.events;
export type GiPlugSlots = typeof __propDef.slots;
export default class GiPlug extends SvelteComponentTyped<GiPlugProps, GiPlugEvents, GiPlugSlots> {
}
export {};
