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
export type GiGingerbreadManProps = typeof __propDef.props;
export type GiGingerbreadManEvents = typeof __propDef.events;
export type GiGingerbreadManSlots = typeof __propDef.slots;
export default class GiGingerbreadMan extends SvelteComponentTyped<GiGingerbreadManProps, GiGingerbreadManEvents, GiGingerbreadManSlots> {
}
export {};
