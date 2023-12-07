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
export type GiSnakeSpiralProps = typeof __propDef.props;
export type GiSnakeSpiralEvents = typeof __propDef.events;
export type GiSnakeSpiralSlots = typeof __propDef.slots;
export default class GiSnakeSpiral extends SvelteComponentTyped<GiSnakeSpiralProps, GiSnakeSpiralEvents, GiSnakeSpiralSlots> {
}
export {};
