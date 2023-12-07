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
export type GiSuitsProps = typeof __propDef.props;
export type GiSuitsEvents = typeof __propDef.events;
export type GiSuitsSlots = typeof __propDef.slots;
export default class GiSuits extends SvelteComponentTyped<GiSuitsProps, GiSuitsEvents, GiSuitsSlots> {
}
export {};
