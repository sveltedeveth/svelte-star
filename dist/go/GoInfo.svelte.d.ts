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
export type GoInfoProps = typeof __propDef.props;
export type GoInfoEvents = typeof __propDef.events;
export type GoInfoSlots = typeof __propDef.slots;
export default class GoInfo extends SvelteComponentTyped<GoInfoProps, GoInfoEvents, GoInfoSlots> {
}
export {};
