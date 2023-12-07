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
export type GoTriangleUpProps = typeof __propDef.props;
export type GoTriangleUpEvents = typeof __propDef.events;
export type GoTriangleUpSlots = typeof __propDef.slots;
export default class GoTriangleUp extends SvelteComponentTyped<GoTriangleUpProps, GoTriangleUpEvents, GoTriangleUpSlots> {
}
export {};
