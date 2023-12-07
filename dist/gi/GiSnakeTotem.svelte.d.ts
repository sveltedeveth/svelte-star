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
export type GiSnakeTotemProps = typeof __propDef.props;
export type GiSnakeTotemEvents = typeof __propDef.events;
export type GiSnakeTotemSlots = typeof __propDef.slots;
export default class GiSnakeTotem extends SvelteComponentTyped<GiSnakeTotemProps, GiSnakeTotemEvents, GiSnakeTotemSlots> {
}
export {};
