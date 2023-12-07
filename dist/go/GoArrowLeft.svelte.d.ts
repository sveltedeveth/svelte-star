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
export type GoArrowLeftProps = typeof __propDef.props;
export type GoArrowLeftEvents = typeof __propDef.events;
export type GoArrowLeftSlots = typeof __propDef.slots;
export default class GoArrowLeft extends SvelteComponentTyped<GoArrowLeftProps, GoArrowLeftEvents, GoArrowLeftSlots> {
}
export {};
