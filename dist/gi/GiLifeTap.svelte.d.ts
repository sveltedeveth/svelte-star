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
export type GiLifeTapProps = typeof __propDef.props;
export type GiLifeTapEvents = typeof __propDef.events;
export type GiLifeTapSlots = typeof __propDef.slots;
export default class GiLifeTap extends SvelteComponentTyped<GiLifeTapProps, GiLifeTapEvents, GiLifeTapSlots> {
}
export {};
