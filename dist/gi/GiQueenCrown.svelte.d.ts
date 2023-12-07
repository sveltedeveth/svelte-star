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
export type GiQueenCrownProps = typeof __propDef.props;
export type GiQueenCrownEvents = typeof __propDef.events;
export type GiQueenCrownSlots = typeof __propDef.slots;
export default class GiQueenCrown extends SvelteComponentTyped<GiQueenCrownProps, GiQueenCrownEvents, GiQueenCrownSlots> {
}
export {};
