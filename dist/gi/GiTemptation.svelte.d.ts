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
export type GiTemptationProps = typeof __propDef.props;
export type GiTemptationEvents = typeof __propDef.events;
export type GiTemptationSlots = typeof __propDef.slots;
export default class GiTemptation extends SvelteComponentTyped<GiTemptationProps, GiTemptationEvents, GiTemptationSlots> {
}
export {};
