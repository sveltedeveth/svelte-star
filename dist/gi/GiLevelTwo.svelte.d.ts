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
export type GiLevelTwoProps = typeof __propDef.props;
export type GiLevelTwoEvents = typeof __propDef.events;
export type GiLevelTwoSlots = typeof __propDef.slots;
export default class GiLevelTwo extends SvelteComponentTyped<GiLevelTwoProps, GiLevelTwoEvents, GiLevelTwoSlots> {
}
export {};
