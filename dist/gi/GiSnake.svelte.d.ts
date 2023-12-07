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
export type GiSnakeProps = typeof __propDef.props;
export type GiSnakeEvents = typeof __propDef.events;
export type GiSnakeSlots = typeof __propDef.slots;
export default class GiSnake extends SvelteComponentTyped<GiSnakeProps, GiSnakeEvents, GiSnakeSlots> {
}
export {};
