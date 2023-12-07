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
export type GoTriangleRightProps = typeof __propDef.props;
export type GoTriangleRightEvents = typeof __propDef.events;
export type GoTriangleRightSlots = typeof __propDef.slots;
export default class GoTriangleRight extends SvelteComponentTyped<GoTriangleRightProps, GoTriangleRightEvents, GoTriangleRightSlots> {
}
export {};
