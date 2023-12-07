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
export type GiLevelThreeProps = typeof __propDef.props;
export type GiLevelThreeEvents = typeof __propDef.events;
export type GiLevelThreeSlots = typeof __propDef.slots;
export default class GiLevelThree extends SvelteComponentTyped<GiLevelThreeProps, GiLevelThreeEvents, GiLevelThreeSlots> {
}
export {};
