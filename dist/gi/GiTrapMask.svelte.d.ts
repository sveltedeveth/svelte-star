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
export type GiTrapMaskProps = typeof __propDef.props;
export type GiTrapMaskEvents = typeof __propDef.events;
export type GiTrapMaskSlots = typeof __propDef.slots;
export default class GiTrapMask extends SvelteComponentTyped<GiTrapMaskProps, GiTrapMaskEvents, GiTrapMaskSlots> {
}
export {};
