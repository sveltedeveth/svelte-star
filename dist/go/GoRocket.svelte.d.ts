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
export type GoRocketProps = typeof __propDef.props;
export type GoRocketEvents = typeof __propDef.events;
export type GoRocketSlots = typeof __propDef.slots;
export default class GoRocket extends SvelteComponentTyped<GoRocketProps, GoRocketEvents, GoRocketSlots> {
}
export {};
