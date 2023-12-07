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
export type GiLadderProps = typeof __propDef.props;
export type GiLadderEvents = typeof __propDef.events;
export type GiLadderSlots = typeof __propDef.slots;
export default class GiLadder extends SvelteComponentTyped<GiLadderProps, GiLadderEvents, GiLadderSlots> {
}
export {};
