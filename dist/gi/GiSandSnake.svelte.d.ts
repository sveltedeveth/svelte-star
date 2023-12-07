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
export type GiSandSnakeProps = typeof __propDef.props;
export type GiSandSnakeEvents = typeof __propDef.events;
export type GiSandSnakeSlots = typeof __propDef.slots;
export default class GiSandSnake extends SvelteComponentTyped<GiSandSnakeProps, GiSandSnakeEvents, GiSandSnakeSlots> {
}
export {};
