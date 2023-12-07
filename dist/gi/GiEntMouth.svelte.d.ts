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
export type GiEntMouthProps = typeof __propDef.props;
export type GiEntMouthEvents = typeof __propDef.events;
export type GiEntMouthSlots = typeof __propDef.slots;
export default class GiEntMouth extends SvelteComponentTyped<GiEntMouthProps, GiEntMouthEvents, GiEntMouthSlots> {
}
export {};
