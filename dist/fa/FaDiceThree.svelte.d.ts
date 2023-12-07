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
export type FaDiceThreeProps = typeof __propDef.props;
export type FaDiceThreeEvents = typeof __propDef.events;
export type FaDiceThreeSlots = typeof __propDef.slots;
export default class FaDiceThree extends SvelteComponentTyped<FaDiceThreeProps, FaDiceThreeEvents, FaDiceThreeSlots> {
}
export {};
