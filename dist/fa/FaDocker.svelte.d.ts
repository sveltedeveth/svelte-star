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
export type FaDockerProps = typeof __propDef.props;
export type FaDockerEvents = typeof __propDef.events;
export type FaDockerSlots = typeof __propDef.slots;
export default class FaDocker extends SvelteComponentTyped<FaDockerProps, FaDockerEvents, FaDockerSlots> {
}
export {};
