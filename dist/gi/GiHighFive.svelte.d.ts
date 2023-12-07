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
export type GiHighFiveProps = typeof __propDef.props;
export type GiHighFiveEvents = typeof __propDef.events;
export type GiHighFiveSlots = typeof __propDef.slots;
export default class GiHighFive extends SvelteComponentTyped<GiHighFiveProps, GiHighFiveEvents, GiHighFiveSlots> {
}
export {};
