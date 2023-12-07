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
export type GoHeartProps = typeof __propDef.props;
export type GoHeartEvents = typeof __propDef.events;
export type GoHeartSlots = typeof __propDef.slots;
export default class GoHeart extends SvelteComponentTyped<GoHeartProps, GoHeartEvents, GoHeartSlots> {
}
export {};
