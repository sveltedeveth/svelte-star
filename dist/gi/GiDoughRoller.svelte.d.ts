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
export type GiDoughRollerProps = typeof __propDef.props;
export type GiDoughRollerEvents = typeof __propDef.events;
export type GiDoughRollerSlots = typeof __propDef.slots;
export default class GiDoughRoller extends SvelteComponentTyped<GiDoughRollerProps, GiDoughRollerEvents, GiDoughRollerSlots> {
}
export {};
