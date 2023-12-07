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
export type GiRoundSiloProps = typeof __propDef.props;
export type GiRoundSiloEvents = typeof __propDef.events;
export type GiRoundSiloSlots = typeof __propDef.slots;
export default class GiRoundSilo extends SvelteComponentTyped<GiRoundSiloProps, GiRoundSiloEvents, GiRoundSiloSlots> {
}
export {};
