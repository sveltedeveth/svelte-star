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
export type GiHamShankProps = typeof __propDef.props;
export type GiHamShankEvents = typeof __propDef.events;
export type GiHamShankSlots = typeof __propDef.slots;
export default class GiHamShank extends SvelteComponentTyped<GiHamShankProps, GiHamShankEvents, GiHamShankSlots> {
}
export {};
