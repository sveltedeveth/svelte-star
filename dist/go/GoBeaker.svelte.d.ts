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
export type GoBeakerProps = typeof __propDef.props;
export type GoBeakerEvents = typeof __propDef.events;
export type GoBeakerSlots = typeof __propDef.slots;
export default class GoBeaker extends SvelteComponentTyped<GoBeakerProps, GoBeakerEvents, GoBeakerSlots> {
}
export {};
