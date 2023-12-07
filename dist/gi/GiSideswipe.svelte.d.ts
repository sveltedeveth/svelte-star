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
export type GiSideswipeProps = typeof __propDef.props;
export type GiSideswipeEvents = typeof __propDef.events;
export type GiSideswipeSlots = typeof __propDef.slots;
export default class GiSideswipe extends SvelteComponentTyped<GiSideswipeProps, GiSideswipeEvents, GiSideswipeSlots> {
}
export {};
