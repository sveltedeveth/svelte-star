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
export type GoTriangleDownProps = typeof __propDef.props;
export type GoTriangleDownEvents = typeof __propDef.events;
export type GoTriangleDownSlots = typeof __propDef.slots;
export default class GoTriangleDown extends SvelteComponentTyped<GoTriangleDownProps, GoTriangleDownEvents, GoTriangleDownSlots> {
}
export {};
