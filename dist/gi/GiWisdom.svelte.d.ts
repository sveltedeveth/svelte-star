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
export type GiWisdomProps = typeof __propDef.props;
export type GiWisdomEvents = typeof __propDef.events;
export type GiWisdomSlots = typeof __propDef.slots;
export default class GiWisdom extends SvelteComponentTyped<GiWisdomProps, GiWisdomEvents, GiWisdomSlots> {
}
export {};
