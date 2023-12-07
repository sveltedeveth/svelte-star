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
export type GiBloodProps = typeof __propDef.props;
export type GiBloodEvents = typeof __propDef.events;
export type GiBloodSlots = typeof __propDef.slots;
export default class GiBlood extends SvelteComponentTyped<GiBloodProps, GiBloodEvents, GiBloodSlots> {
}
export {};
