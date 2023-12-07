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
export type GiToadTeethProps = typeof __propDef.props;
export type GiToadTeethEvents = typeof __propDef.events;
export type GiToadTeethSlots = typeof __propDef.slots;
export default class GiToadTeeth extends SvelteComponentTyped<GiToadTeethProps, GiToadTeethEvents, GiToadTeethSlots> {
}
export {};
