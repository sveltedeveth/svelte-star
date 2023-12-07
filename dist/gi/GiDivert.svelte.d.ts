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
export type GiDivertProps = typeof __propDef.props;
export type GiDivertEvents = typeof __propDef.events;
export type GiDivertSlots = typeof __propDef.slots;
export default class GiDivert extends SvelteComponentTyped<GiDivertProps, GiDivertEvents, GiDivertSlots> {
}
export {};
