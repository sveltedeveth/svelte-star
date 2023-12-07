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
export type GoHubotProps = typeof __propDef.props;
export type GoHubotEvents = typeof __propDef.events;
export type GoHubotSlots = typeof __propDef.slots;
export default class GoHubot extends SvelteComponentTyped<GoHubotProps, GoHubotEvents, GoHubotSlots> {
}
export {};
