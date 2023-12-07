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
export type FaQuoraProps = typeof __propDef.props;
export type FaQuoraEvents = typeof __propDef.events;
export type FaQuoraSlots = typeof __propDef.slots;
export default class FaQuora extends SvelteComponentTyped<FaQuoraProps, FaQuoraEvents, FaQuoraSlots> {
}
export {};
