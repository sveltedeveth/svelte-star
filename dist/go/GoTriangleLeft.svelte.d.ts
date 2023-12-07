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
export type GoTriangleLeftProps = typeof __propDef.props;
export type GoTriangleLeftEvents = typeof __propDef.events;
export type GoTriangleLeftSlots = typeof __propDef.slots;
export default class GoTriangleLeft extends SvelteComponentTyped<GoTriangleLeftProps, GoTriangleLeftEvents, GoTriangleLeftSlots> {
}
export {};
