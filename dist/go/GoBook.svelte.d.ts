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
export type GoBookProps = typeof __propDef.props;
export type GoBookEvents = typeof __propDef.events;
export type GoBookSlots = typeof __propDef.slots;
export default class GoBook extends SvelteComponentTyped<GoBookProps, GoBookEvents, GoBookSlots> {
}
export {};
