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
export type GiBlastProps = typeof __propDef.props;
export type GiBlastEvents = typeof __propDef.events;
export type GiBlastSlots = typeof __propDef.slots;
export default class GiBlast extends SvelteComponentTyped<GiBlastProps, GiBlastEvents, GiBlastSlots> {
}
export {};
