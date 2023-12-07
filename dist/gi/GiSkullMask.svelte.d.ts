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
export type GiSkullMaskProps = typeof __propDef.props;
export type GiSkullMaskEvents = typeof __propDef.events;
export type GiSkullMaskSlots = typeof __propDef.slots;
export default class GiSkullMask extends SvelteComponentTyped<GiSkullMaskProps, GiSkullMaskEvents, GiSkullMaskSlots> {
}
export {};
