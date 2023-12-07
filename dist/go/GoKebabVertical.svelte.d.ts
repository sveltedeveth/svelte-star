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
export type GoKebabVerticalProps = typeof __propDef.props;
export type GoKebabVerticalEvents = typeof __propDef.events;
export type GoKebabVerticalSlots = typeof __propDef.slots;
export default class GoKebabVertical extends SvelteComponentTyped<GoKebabVerticalProps, GoKebabVerticalEvents, GoKebabVerticalSlots> {
}
export {};
