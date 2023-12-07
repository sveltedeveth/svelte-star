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
export type GiLevelFourProps = typeof __propDef.props;
export type GiLevelFourEvents = typeof __propDef.events;
export type GiLevelFourSlots = typeof __propDef.slots;
export default class GiLevelFour extends SvelteComponentTyped<GiLevelFourProps, GiLevelFourEvents, GiLevelFourSlots> {
}
export {};
