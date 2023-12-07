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
export type GiAmputationProps = typeof __propDef.props;
export type GiAmputationEvents = typeof __propDef.events;
export type GiAmputationSlots = typeof __propDef.slots;
export default class GiAmputation extends SvelteComponentTyped<GiAmputationProps, GiAmputationEvents, GiAmputationSlots> {
}
export {};
