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
export type DiDockerProps = typeof __propDef.props;
export type DiDockerEvents = typeof __propDef.events;
export type DiDockerSlots = typeof __propDef.slots;
export default class DiDocker extends SvelteComponentTyped<DiDockerProps, DiDockerEvents, DiDockerSlots> {
}
export {};
