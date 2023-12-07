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
export type GoKebabHorizontalProps = typeof __propDef.props;
export type GoKebabHorizontalEvents = typeof __propDef.events;
export type GoKebabHorizontalSlots = typeof __propDef.slots;
export default class GoKebabHorizontal extends SvelteComponentTyped<GoKebabHorizontalProps, GoKebabHorizontalEvents, GoKebabHorizontalSlots> {
}
export {};
