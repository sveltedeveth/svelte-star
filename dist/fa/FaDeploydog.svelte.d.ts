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
export type FaDeploydogProps = typeof __propDef.props;
export type FaDeploydogEvents = typeof __propDef.events;
export type FaDeploydogSlots = typeof __propDef.slots;
export default class FaDeploydog extends SvelteComponentTyped<FaDeploydogProps, FaDeploydogEvents, FaDeploydogSlots> {
}
export {};
