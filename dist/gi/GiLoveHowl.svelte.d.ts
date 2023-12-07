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
export type GiLoveHowlProps = typeof __propDef.props;
export type GiLoveHowlEvents = typeof __propDef.events;
export type GiLoveHowlSlots = typeof __propDef.slots;
export default class GiLoveHowl extends SvelteComponentTyped<GiLoveHowlProps, GiLoveHowlEvents, GiLoveHowlSlots> {
}
export {};
